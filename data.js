const data = {
  habilities: {
    html: 90,
    css: 90,
    js: 90,
    angular: 65,
    'react-js': 60,
    'node-js': 65,
    mysql: 35,
    inglês: 50
  },
  courses: [
    {
      name: 'Análise e desenvolvimento de sistemas',
      conclusionDate: '2022',
      finished: false,
      status: '2° semestre',
      level: 'superior'
    },
    {
      name: 'Ensino médio',
      conclusionDate: '2019',
      finished: true,
      level: 'regular'
    },
    {
      name: 'Técnico em informática',
      conclusionDate: '2019',
      finished: true,
      level: 'técnico'
    },
    {
      name: 'Assistente adminstrativo',
      conclusionDate: '2017',
      finished: true,
      level: 'aprendizagem'
    }
  ],
  projects: [
    {
      name: 'Calculadora simples',
      description: 'Uma aplicação sigle-page simples, que permite realizar operações matemáticas básicas.',
      technology: ['HTML', 'CSS', 'JS'],
      link: 'https://lucas-almeida026.github.io/simpleCalculator/'
    },
    {
      name: 'Today - Todo List',
      description: 'Uma single-page-aplication que permite criar, editar, excluir e concluir tarefas à serem feitas, funciona como outros aplicativos do gênero to-do-list e usa o localStorage para armazenar as informações.',
      technology: ['HTML', 'CSS', 'JS'],
      link: 'https://lucas-almeida026.github.io/todoList/'
    },
    {
      name: 'Do Community',
      description: 'É uma plataforma que conecta pessoas e instituições por meio de uma comunidade e incentiva a execução de projetos na área de comuniação.',
      technology: ['Angular', 'Node'],
      link: 'https://do.community/'
    },
    {
      name: 'Form Validator La',
      description: 'Um pacote npm que permite a verificação de formulários react.js',
      technology: ['Javascript'],
      link: 'https://www.npmjs.com/package/form-validator-la'
    }
  ],
  otherCourses: [
    {
      name: 'React',
      institution: 'Udemy',
      year: '2020',
      completion: '55%'
    },
    {
      name: 'React-native',
      institution: 'Udemy',
      year: '2020',
      completion: '46%'
    },
    {
      name: 'Javascript e Typescript avançado',
      institution: 'Udemy',
      year: '2020',
      completion: '74%'
    },
    {
      name: 'Angular',
      institution: 'Alura',
      year: '2020',
      completion: '75%'
    },
  ],
  contacts: [
    {
      title: 'Linkedin',
      paragraph: 'Lucas Almeida',
      icon: './imgs/linkedin.png',
      callToAction: 'Clique aqui para acessar <br> meu perfil no linkedin',
      onClick: () => window.open('https://www.linkedin.com/in/lucas-almeida-webdev/', '_blank')
    },
    {
      title: 'Gmail',
      paragraph: 'lucas.almeida.webdev',
      icon: 'https://tompfister.files.wordpress.com/2014/06/white-email-icon-png-u1nhol7t.png?w=600',
      callToAction: 'Clique aqui para copiar meu endereço de email',
      onClick: () => {
        navigator.clipboard.writeText('lucas.almeida.webdev@gmail.com')
        showPopup('Endereço de email copiado para a área de transferência', 3000)
      }
    },
  ]
}
