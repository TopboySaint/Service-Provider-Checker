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
    prefix: "0806",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },

  {
    network: "MTN",
    prefix: "0703",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },

  {
    network: "MTN",
    prefix: "0706",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0813",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0816",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0810",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0814",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },

  {
    network: "MTN",
    prefix: "0903",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0906",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0913",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0916",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },
  
  {
    network: "MTN",
    prefix: "0702",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },

  {
    network: "MTN",
    prefix: "0704",
    networkLogo: `<img src ="images/mtnlogo.jpeg"/>`
  },

  {
    network: "Airtel",
    prefix: "0802",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },

  {
    network: "Airtel",
    prefix: "0808",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },
  
  {
    network: "Airtel",
    prefix: "0708",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },
  
  {
    network: "Airtel",
    prefix: "0812",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },
  
  {
    network: "Airtel",
    prefix: "0701",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },
  
  {
    network: "Airtel",
    prefix: "0902",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },
  
  {
    network: "Airtel",
    prefix: "0901",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },
  
  {
    network: "Airtel",
    prefix: "0904",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },
  
  {
    network: "Airtel",
    prefix: "0907",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },

  {
    network: "Airtel",
    prefix: "0912",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
  },

  {
    network: "Airtel",
    prefix: "0802",
    networkLogo: `<img src ="images/airtellogo.jpeg" width = "300"/>`
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
