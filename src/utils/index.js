const toVND = (num) => {
  return `${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")} đ`;
}

export default {
  toVND,
  
}