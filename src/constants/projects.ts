import images from './images';

const project1 = [ images.html, 'HTML', 'www.google.com', 'www.github.com', 'description', 'UI/UX' ];
const project2 = [ images.css, 'CSS', 'www.google.com', 'www.github.com', 'description', 'UI/UX' ];
const project3 = [ images.adidas, 'Adidas', 'www.google.com', 'www.github.com', 'description', 'Web App' ];
const project4 = [ images.flutter, 'Flutter', 'www.google.com', 'www.github.com', 'description', 'Mobile App' ];
const project5 = [ images.cpp, 'C++', 'www.google.com', 'www.github.com', 'description', 'Desktop App' ];

type tprojects = { [key: string] : Array<any> };
const projects : tprojects =  { 
  'UI/UX' : [project1, project2],
  'Web App' : [project3],
  'Mobile App' : [project4],
  'Desktop App' : [project5],
  'Other' : [project1, project5]
 };

export default projects;