import { Component, OnInit } from '@angular/core';

export interface Section {
  title: string;
  entries: Entry[];
}

export interface Entry {
  leftTitle: string;
  leftLink?: string;
  leftContent: string;
  rightTitle: string;
  rightContent?: string;
  rightContentList?: string[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sections: Section[] = [
    {
      title: 'Work Experience',
      entries: [
        {
          leftTitle: 'Pokerstars',
          leftContent: 'Jun. 2022 - Present',
          rightTitle: 'Intern Back-end Developer',
          rightContent: `Implement and maintain a variety of back office web applications for Pokerstars.`,
          rightContentList: [
            'Architecting new back office tools and web applications using Spring boot and Angular.',
            'Optimizing and refactoring legacy code.',
            'Introducing new technologies for building, testing and maintaining the applications, including Mockito, Junit5, Junit4 Grafana, Prometheus, SonarQube, AWS and etc.',
            'Building and deploying applications using the Jenkins CI/CD pipeline.',
            'Migrating to AWS and use best practices'
          ]
        },
        {
          leftTitle: 'Mobile Wave Solutions',
          leftContent: 'Jan. 2022 - April. 2022',
          rightTitle: 'Back-end Trainee',
          rightContent: '',
          rightContentList: [
            'Implement project specific features using Java core and custom ORM',
            'Work together to offer services to their customers.'
          ],
        }
      ]
    },
    {
      title: 'Projects',
      entries: [
        {
          leftTitle: 'My Resume',
          leftLink: 'https://github.com/hristo2612/hristo2612.github.io',
          leftContent: 'March. 2023',
          rightTitle: 'Angular & SCSS',
          rightContent: 'It is a static resume website. The one you are reading right now.',
        },
        {
          leftTitle: 'Recipe App',
          leftLink: 'https://github.com/nsmilyanski/Spring-Recipe-App',
          leftContent: 'Oct. 2021',
          rightTitle: 'Spring Boot and Thymeleaf',
          rightContent: 'It is a web applications for recipes using spring boot back-end, in-memory database and Thymeleaf for a front-end part',
        },
        {
          leftTitle: 'Spring 5 Rest Application',
          leftLink: 'https://github.com/nsmilyanski/Spring5-MVC-Rest',
          leftContent: 'Aug. 2022',
          rightTitle: 'Spring Framework 5',
          rightContent: 'Example of spring boot rest api.',
        },
        {
          leftTitle: 'Pet Clinic',
          leftLink: 'https://github.com/nsmilyanski/Pet-Clinic',
          leftContent: 'April. 2022',
          rightTitle: 'Spring Boot and Thymeleaf',
          rightContent: 'It is a web applications using spring boot back-end, in-memory database and Thymeleaf for a front-end part.'
        },
        {
          leftTitle: 'Data structures',
          leftLink: 'https://github.com/nsmilyanski/Data-structures-Softuni',
          leftContent: 'March. 2018',
          rightTitle: 'Java',
          rightContent: 'The most common data structures in Java.'
        },
        {
          leftTitle: 'Spring Data',
          leftLink: 'https://github.com/nsmilyanski/SpringData',
          leftContent: 'Feb. 2022',
          rightTitle: 'Spring Framework',
          rightContent: 'Simple examples of using spring data.',
        },
        {
          leftTitle: 'Angular Ecommerce',
          leftLink: 'https://github.com/nsmilyanski/Angular-Ecommerce',
          leftContent: 'Oct. 2022',
          rightTitle: 'Angular ',
          rightContent: 'It is ecommerce front-end web application',
        },
        {
          leftTitle: 'Spring Boot Ecommerce',
          leftLink: '',
          leftContent: 'Feb. 2022',
          rightTitle: 'Angular & SCSS',
          rightContent: 'Back-end part of ecommerce wev application.'
        },
        {
          leftTitle: 'Mini-ORM',
          leftLink: 'https://github.com/nsmilyanski/Mini-ORM',
          leftContent: 'Jan. 2022',
          rightTitle: 'Java',
          rightContent: 'It is a custom ORM.',
        }
      ]
    },
    {
      title: 'Education',
      entries: [
        {
          leftTitle: 'Software University (SoftUni)',
          leftLink: 'https://softuni.bg/',
          leftContent: 'Dec. 2022 - Present',
          rightTitle: 'Javascript Applications',
          rightContent: ''
        },
        {
          leftTitle: 'Software University (SoftUni)',
          leftLink: 'https://softuni.bg/',
          leftContent: 'Jan. 2021 - Aug. 2022',
          rightTitle: 'Java Web Developer',
          rightContent: ''
        },
        {
          leftTitle: 'Technical University Sofia',
          leftLink: 'https://www.tu-sofia.bg/',
          leftContent: 'Sep. 2012 - May. 2016',
          rightTitle: '',
          rightContent: ''
        },
        {
          leftTitle: 'High School Yane Sandanski',
          leftLink: '',
          leftContent: '2007 - 2012',
          rightTitle: 'Computer science and Mathematics',
          rightContent: ''
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
