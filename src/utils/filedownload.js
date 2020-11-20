
const fileDownload = (data, filename) => {
  const photo_url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement("a");
  link.href = photo_url;
  link.setAttribute("download", `${filename}.jpeg`);
  document.body.appendChild(link);
  link.click();
  link.remove();
};
