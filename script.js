let arrayOfNetworks = [];

arrayOfNetworks = [
  {
    network: "9Mobile",
    prefix: "0809",
    networkLogo: `<img src ="images/etisalatlogo.jpeg"/>`
  },

  {
    network: "9Mobile",
    prefix: "0909",
    networkLogo: `<img src ="images/etisalatlogo.jpeg"/>`
  },

  {
    network: "9Mobile",
    prefix: "0818",
    networkLogo: `<img src ="images/etisalatlogo.jpeg"/>`
  },

  {
    network: "9Mobile",
    prefix: "0908",
    networkLogo: `<img src ="images/etisalatlogo.jpeg"/>`
  },

  {
    network: "9Mobile",
    prefix: "0817",
    networkLogo: `<img src ="images/etisalatlogo.jpeg"/>`
  },

  {
    network: "MTN",
    prefix: "0803",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },

  {
    network: "MTN",
    prefix: "0803",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
];

const checkProvider = () => {
  let phoneNumber = document.getElementById("mobileNumber").value;
  arrayOfNetworks.map((server) => {
    if (phoneNumber.length != 11 || phoneNumber == "") {
      document.getElementById("errorMsg").style.display = "block";
    }else if(phoneNumber.substring(0,4).includes(server.prefix)){
        console.log(server.network);
        showNetwork.innerHTML = `
        ${server.networkLogo}
        ${server.network}: ${phoneNumber}`
    }
  });
};
