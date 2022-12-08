import DashboardIcon from '@mui/icons-material/Dashboard';
import Groups3Icon from '@mui/icons-material/Groups3';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export const adminSideMenus = [
    {
        label: "Dashboard",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/admin/dashboard"
    },
    {
        label: "Package",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/admin/package"
    },
    {
        label: "Customers",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/admin/customers"
    },
    {
        label: "Billing",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/admin/billing"
    },
    {
        label: "Job Board",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/admin/job-board"
    },
    {
        label: "Ticket",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/admin/ticket"
    },
    {
        label: "Users",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/admin/users"
    }
]

export const customerSideMenus = [
    {
        label: "Dashboard",
        icon: <FontAwesomeIcon icon="coffee" className='iconColor' />,
        url: "/customer/dashboard"
    },
]