// qiao
const qiao = require('../src/util/qiao.js');

// dishi
const dishi = require('../src/dishi.js');

// cmd for ucenter-----------------------------------------------------
// cmd for login
qiao.cli.cmd.command('login').usage(' ').description('login').action(login);

// cmd for logout
qiao.cli.cmd.command('logout').usage(' ').description('logout').action(logout);

// cmd for whoami
qiao.cli.cmd.command('whoami').usage(' ').description('whoami').action(whoami);

// cmd for reg
qiao.cli.cmd.command('reg').usage(' ').description('register').action(register);

// login
async function login() {
  try {
    const userinfo = qiao.config.config('userinfo');
    if (userinfo && userinfo.userid && userinfo.usertoken && userinfo.mobile) {
      qiao.log.suc(`already login as ${userinfo.mobile}`);
      return;
    }

    const answers = await qiao.cli.ask([
      {
        type: 'input',
        name: 'mobile',
        message: 'mobile:',
      },
      {
        type: 'password',
        mask: '*',
        name: 'password',
        message: 'password:',
      },
    ]);

    await dishi.login(answers.mobile, answers.password);
  } catch (e) {
    qiao.log.danger(e.message);
  }
}

// logout
function logout() {
  qiao.config.clear();
  qiao.log.suc('already logout');
}

// whoami
function whoami() {
  const userinfo = qiao.config.config('userinfo');
  if (userinfo && userinfo.userid && userinfo.usertoken && userinfo.mobile) {
    qiao.log.suc(`login as ${userinfo.mobile}`);
    return;
  }

  qiao.log.danger('not login');
}

// register
async function register() {
  try {
    const mobileAnswers = await qiao.cli.ask([
      {
        type: 'input',
        name: 'mobile',
        message: 'mobile:',
      },
    ]);

    const mobileRes = await dishi.sendCode(mobileAnswers.mobile);
    if (!mobileRes) return;

    const answers = await qiao.cli.ask([
      {
        type: 'input',
        name: 'code',
        message: 'code:',
      },
      {
        type: 'password',
        mask: '*',
        name: 'password',
        message: 'password:',
      },
      {
        type: 'password',
        mask: '*',
        name: 'repassword',
        message: 'confirm password:',
      },
    ]);

    await dishi.register(mobileAnswers.mobile, answers.password, answers.repassword, answers.code);
  } catch (e) {
    qiao.log.danger(e.message);
  }
}
