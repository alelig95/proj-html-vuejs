new Vue ({
  el: '#app',
  data: {
    logo: 'images/white-logo-2.png',
    navbarLinks: ['Home', 'About', 'Services', 'Blog', 'Contact', 'Portfolio'],
    footerQuickLinks: ['Services', 'Contact', 'Blog'],
    footerResources: ['Art Design', 'Computer', 'IT News', 'Networking', 'Web Security'],
    footerContactUs: [
      {
          address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
          phone: '+99 (0) 101 0000 888',
          email: 'Info@yourdomain.com',
      }
    ]
    
  }
});
Vue.config.devtools = true;