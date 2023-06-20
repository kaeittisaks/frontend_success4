// component

import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1}} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('5'),
  },
  {
    title: 'Template',
    path: '/dashboard/Template',
    icon: icon('4'),
  },
  {
    title: 'Document',
    path: '/dashboard/Document',
    icon: icon('3'),
  },
  {
    title: 'Team',
    path: '/dashboard/Team',
    icon: icon('2'),
  },
];

export default navConfig;
