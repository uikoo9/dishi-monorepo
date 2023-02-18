/**
 * getServerData
 * @returns data
 */
export const getServerData = () => {
  const $data = document.getElementById('serverData');
  if (!$data || !$data.value) return;

  try {
    const data = JSON.parse($data.value);
    if (!data) return;

    $data.remove();
    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};
