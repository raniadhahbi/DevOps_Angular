import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
   
  },
 
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Administration',
    url: '/administration',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Area',
        url: '/administration/area',
        icon: 'icon-puzzle'
      },
      {
        name: 'Business Lines',
        url: '/administration/Business_Lines',
        icon: 'icon-puzzle'
      },
      {
        name: 'Business Units',
        url: '/administration/Business_Units',
        icon: 'icon-puzzle'
      },
      {
        name: 'Currencies',
        url: '/administration/currencies',
        icon: 'icon-puzzle'
      },
      {
        name: 'Customers',
        url: '/administration/customers',
        icon: 'icon-puzzle'

      },
      {
        name: 'Departements',
        url: '/administration/departements',
        icon: 'icon-puzzle'
      },
      {
        name: 'Geography',
        url: '/administration/geography',
        icon: 'icon-puzzle'
      },
      {
        name: 'Permissions',
        url: '/administration/permissions',
        icon: 'icon-puzzle'
      },
      {
        name: 'Presales Engineers',
        url: '/administration/presales_Engineers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Products Lines',
        url: '/administration/products_Lines',
        icon: 'icon-puzzle'
      },
      {
        name: 'User',
        url: '/administration/users',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Opportunities',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Reporting',
    url: '/reporting',
    icon: 'icon-pie-chart'
  },
  {
    name: 'Anonymization',
    url: '/anonymization',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/anonymization/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      }
      
    ]
  },
  {
    name: 'Order Book',
    url: '/order_Book',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/order_Book/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/order_Book/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/order_Book/modals',
        icon: 'icon-bell'
      }
    ]
  },
 
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  }
];
