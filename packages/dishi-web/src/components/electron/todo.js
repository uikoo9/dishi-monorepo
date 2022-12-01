/**
 * init database
 * @returns
 */
export const initDatabase = async () => {
  // todo table
  const createTodoTable = "CREATE TABLE if not exists t_todos (todo_content TEXT, todo_time TEXT)";
  const createTodoTableRs = await window.electron.createTableIPC(createTodoTable);
  console.log("createTodoTableRs", createTodoTableRs);

  // done table
  const createDoneTable = "CREATE TABLE if not exists t_dones (todo_content TEXT, todo_time TEXT, done_time TEXT)";
  const createDoneTableRs = await window.electron.createTableIPC(createDoneTable);
  console.log("createDoneTableRs", createDoneTableRs);
};

/**
 * add todo
 * @param {*} todo
 */
export const addTodo = async (todo) => {
  if (!todo) return;

  // todo
  const todos = todo.split("@");
  const todo_content = todos[0].trim();
  let todo_time;
  if (todos.length > 1) {
    const todotime = todos[1].trim();
    if (todotime.length == 8 && !isNaN(parseInt(todotime))) todo_time = todotime;
  }

  // save
  const sql = "insert into t_todos values (?, ?)";
  const res = await window.electron.insertDataIPC(sql, [todo_content, todo_time || "_"]);
  console.log("add todo:", res);
};

/**
 * del todo
 * @param {*} key
 */
export const delTodo = async (key) => {
  // query
  const selectSql = "SELECT rowid,* FROM t_todos where rowid=?";
  const selectRes = await window.electron.selectDataIPC(selectSql, [key]);
  console.log("get todo:", selectRes);
  if (!selectRes || selectRes.type != "success" || !selectRes.obj || !selectRes.obj.length) return;

  // todo
  const todo = selectRes.obj[0];

  // done
  const insertSql = "insert into t_dones values (?, ?, ?)";
  const insertRes = await window.electron.insertDataIPC(insertSql, [todo.todo_content, todo.todo_time, Date.now()]);
  console.log("add done:", insertRes);
  // if(!insertRes || insertRes.type != 'success' || !insertRes.obj || !insertRes.obj.length) return;

  // del
  const sql = "delete from t_todos where rowid=?";
  const res = await window.electron.deleteDataIPC(sql, [key]);
  console.log("del todo:", res);
};

/**
 * get todos
 * @returns todos
 */
export const getTodos = async () => {
  // query
  const selectSql = "SELECT rowid,* FROM t_todos order by todo_time, todo_content";
  const selectRes = await window.electron.selectDataIPC(selectSql, []);
  console.log("get todos:", selectRes);

  // check
  if (!selectRes || selectRes.type != "success" || !selectRes.obj || !selectRes.obj.length) return;

  // return
  return selectRes.obj;
};

/**
 * get dones
 * @returns todos
 */
export const getDones = async () => {
  // query
  const selectSql = "SELECT rowid,* FROM t_dones order by todo_time, todo_content";
  const selectRes = await window.electron.selectDataIPC(selectSql, []);
  console.log("get dones:", selectRes);

  // check
  if (!selectRes || selectRes.type != "success" || !selectRes.obj || !selectRes.obj.length) return;

  // return
  return selectRes.obj;
};
