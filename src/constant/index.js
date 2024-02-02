import {
  associations,
  blogImg1,
  blogImg2,
  blogImg3,
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  groups,
  membership,
} from '../assets';

export const navItems = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Products',
    path: 'products',
  },
  {
    name: 'Testimonial',
    path: 'testimonial',
  },
  {
    name: 'Blogs',
    path: 'blogs',
  },
];

export const services = [
  {
    id: 1,
    title: 'Membership Organisations',
    desc: 'Our membership management software provides full automation of membership renewals and payments',
    img: membership,
  },
  {
    id: 2,
    title: 'National Associations',
    desc: 'Our membership management software provides full automation of membership renewals and payments',
    img: associations,
  },
  {
    id: 3,
    title: 'Clubs And Groups',
    desc: 'Our membership management software provides full automation of membership renewals and payments',
    img: groups,
  },
];

export const company = [
  {
    img: company1,
    alt: 'company1',
  },
  {
    img: company2,
    alt: 'company2',
  },
  {
    img: company3,
    alt: 'company3',
  },
  {
    img: company4,
    alt: 'company4',
  },
  {
    img: company5,
    alt: 'company5',
  },
  {
    img: company6,
    alt: 'company6',
  },
];

export const blogs = [
  {
    id: 1,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    img: blogImg1,
  },
  {
    id: 2,
    title:
      'What are your safeguarding responsibilities and how can you manage them?',
    img: blogImg2,
  },
  {
    id: 3,
    title: 'Revamping the Membership Model with Triathlon Australia',
    img: blogImg3,
  },
];
