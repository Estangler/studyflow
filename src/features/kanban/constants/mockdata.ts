import type { Task } from "../types/models";

//Mock
export const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Configurar Layout Base",
    description:
      "Estruturar a base visual do Kanban com sidebar, header e área principal responsiva para suportar futuras funcionalidades.",
    status: "ONBOARD",
    priority: "HIGH",
  },
  {
    id: "2",
    title: "Definir Tipagem do Kanban",
    description:
      "Criar interfaces e tipos responsáveis pelas tasks, colunas e status para garantir segurança e previsibilidade na aplicação.",
    status: "COMPLETED",
    priority: "MEDIUM",
  },
  {
    id: "3",
    title: "Renderizar Card",
    description:
      "Construir o componente visual da task exibindo título, descrição e ações básicas de interação dentro da coluna.",
    status: "PROGRESS",
    priority: "URGENT",
  },
  {
    id: "4",
    title: "Renderizar Colunas",
    description:
      "Criar as colunas do fluxo Kanban organizando as tasks por status e preparando a estrutura para movimentação.",
    status: "TODO",
    priority: "HIGH",
  },
  {
    id: "5",
    title: "Renderizar Botão",
    description:
      "Implementar botões reutilizáveis com variantes visuais e estados interativos consistentes com o design system.",
    status: "ONBOARD",
    priority: "LOW",
  },
];
