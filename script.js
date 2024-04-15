let arrayOfNetworks = [];

arrayOfNetworks = [
  {
    network: "9 Mobile",
    prefix: "0709",
    // networkLogo:
  },

  {
    network: "9 Mobile",
    prefix: "0909",
    // networkLogo:
  },

  {
    network: "9 Mobile",
    prefix: "0818",
    // networkLogo:
  },

  {
    network: "9 Mobile",
    prefix: "0916",
    // networkLogo:
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
        ${server.network}: ${phoneNumber}`
    }
  });
};
