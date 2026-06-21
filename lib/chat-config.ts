export const chatConfig = {
  // Dados da empresa (genéricos)
  company: {
    name: 'Empresa X',
    email: 'contato@empresax.com',
    phone: '(99) 99999-9999',
    address: 'Rua Exemplo, 123 - Centro',
    city: 'Sua Cidade',
    state: 'SE',
    cnpj: '00.000.000/0001-00',
    founded: '01/01/2000',
    hours: 'Segunda a Sexta, das 08h às 18h',
  },

  // Produtos/Serviços
  offerings: {
    type: 'serviços', // ou 'produtos'
    list: [
      'Serviço A - Descrição resumida',
      'Serviço B - Descrição resumida',
      'Serviço C - Descrição resumida',
    ],
    main: 'Serviço A é o mais procurado',
  },

  // Respostas padrão
  responses: {
    about:
      'Somos a [name], uma empresa que atua no setor de [setor]. Oferecemos [offerings] para atender às necessidades dos nossos clientes. Fundada em [founded], estamos localizados em [city] e atendemos toda a região. Quer saber mais sobre algum serviço específico?',

    contact:
      'Você pode nos contatar pelo telefone [phone] ou pelo e-mail [email]. Nosso atendimento é de [hours].',

    schedule: 'Atendemos de [hours]. Para agendamentos, entre em contato pelo telefone [phone] ou e-mail [email].',

    location: 'Estamos localizados em [address], [city] - [state].',

    pricing: 'Nossos preços variam conforme o serviço. Entre em contato pelo [phone] para um orçamento personalizado.',
  },
}