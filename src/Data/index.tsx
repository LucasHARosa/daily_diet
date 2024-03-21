
export interface Meal {
  id: string;
  name: string;
  description: string;
  datetime: Date;
  followPlan: boolean;
}

export const meals: Meal[] = [
  {
    id: "1",
    name: "Café da manhã: Pão de queijo",
    description: "Pão de queijo mineiro",
    datetime: new Date("2024-03-14T08:00:00"),
    followPlan: true,
  },
  {
    id: "2",
    name: "Almoço: Arroz, feijão, carne",
    description: "Prato típico brasileiro",
    datetime: new Date("2024-03-14T12:30:00"),
    followPlan: false,
  },
  {
    id: "3",
    name: "Lanche da tarde: Sanduíche natural",
    description: "Sanduíche de peito de peru e queijo branco",
    datetime: new Date("2024-03-14T15:00:00"),
    followPlan: true,
  },
  {
    id: "4",
    name: "Jantar: Sopa de legumes",
    description: "Sopa caseira com variedade de legumes",
    datetime: new Date("2024-03-14T19:00:00"),
    followPlan: true,
  },
  {
    id: "5",
    name: "Café da manhã: Vitamina de frutas",
    description: "Vitamina de banana e morango",
    datetime: new Date("2024-03-15T08:30:00"),
    followPlan: false,
  },
  {
    id: "6",
    name: "Almoço: Salada de quinoa",
    description: "Salada de quinoa com legumes e frango grelhado",
    datetime: new Date("2024-03-15T12:45:00"),
    followPlan: true,
  },
  {
    id: "7",
    name: "Lanche da tarde: Frutas secas",
    description: "Mix de frutas secas e castanhas",
    datetime: new Date("2024-03-15T16:00:00"),
    followPlan: true,
  },
  {
    id: "8",
    name: "Jantar: Peixe grelhado com legumes",
    description: "Filé de peixe grelhado acompanhado de legumes no vapor",
    datetime: new Date("2024-03-15T19:30:00"),
    followPlan: false,
  },
  {
    id: "9",
    name: "Café da manhã: Omelete",
    description: "Omelete de espinafre com queijo",
    datetime: new Date("2024-03-16T08:15:00"),
    followPlan: true,
  },
  {
    id: "10",
    name: "Almoço: Feijoada",
    description: "Feijoada completa com couve, laranja e farofa",
    datetime: new Date("2024-03-16T13:00:00"),
    followPlan: true,
  },
  {
    id: "11",
    name: "Lanche da tarde: Smoothie de abacate",
    description: "Smoothie cremoso de abacate com leite de amêndoas",
    datetime: new Date("2024-03-16T16:30:00"),
    followPlan: false,
  },
  {
    id: "12",
    name: "Jantar: Risoto de cogumelos",
    description: "Risoto cremoso de cogumelos frescos",
    datetime: new Date("2024-03-16T20:00:00"),
    followPlan: true,
  },
  {
    id: "13",
    name: "Café da manhã: Tapioca recheada",
    description: "Tapioca recheada com queijo branco e tomate",
    datetime: new Date("2024-03-17T08:45:00"),
    followPlan: true,
  },
  {
    id: "14",
    name: "Almoço: Salada de frutas",
    description: "Salada refrescante com variedade de frutas da estação",
    datetime: new Date("2024-03-17T12:00:00"),
    followPlan: false,
  },
  {
    id: "15",
    name: "Lanche da tarde: Barra de cereal",
    description: "Barra de cereal com castanhas e frutas secas",
    datetime: new Date("2024-03-17T15:15:00"),
    followPlan: true,
  },
  {
    id: "16",
    name: "Jantar: Frango assado com batatas",
    description: "Peito de frango assado acompanhado de batatas rústicas",
    datetime: new Date("2024-03-17T19:45:00"),
    followPlan: true,
  },
  {
    id: "17",
    name: "Café da manhã: Smoothie de manga",
    description: "Smoothie refrescante de manga com iogurte",
    datetime: new Date("2024-03-18T09:00:00"),
    followPlan: false,
  },
  {
    id: "18",
    name: "Almoço: Yakissoba",
    description: "Yakissoba vegetariano com legumes frescos",
    datetime: new Date("2024-03-18T12:30:00"),
    followPlan: true,
  },
  {
    id: "19",
    name: "Lanche da tarde: Chips de batata-doce",
    description: "Chips assados de batata-doce temperados",
    datetime: new Date("2024-03-18T16:00:00"),
    followPlan: true,
  },
  {
    id: "20",
    name: "Jantar: Pizza de vegetais",
    description: "Pizza caseira com massa integral e vegetais frescos",
    datetime: new Date("2024-03-18T20:00:00"),
    followPlan: false,
  },
];