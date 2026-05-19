# StudyFlow
 
> Kanban board para gerenciamento de tarefas de estudo, com autenticação de usuários e dashboard interativo.
 
---
 
## Sobre o projeto
 
StudyFlow é uma SPA desenvolvida para organizar tarefas de estudo em um board Kanban com quatro estágios: **Backlog**, **A fazer**, **Em progresso** e **Concluído**.
 
O projeto foi construído com foco em arquitetura orientada a domínio, separação de responsabilidades e boas práticas de desenvolvimento React — indo além do que tutoriais costumam cobrir.
 
---
 
## Funcionalidades
 
- **Autenticação completa** — registro, login e logout com persistência de sessão
- **Rotas protegidas** — acesso ao dashboard restrito a usuários autenticados
- **Kanban board** — criação, movimentação entre colunas e exclusão de tarefas
- **Prioridades** — tarefas categorizadas por nível de urgência (Low, Medium, High, Urgent)
- **Dashboard responsivo** — sidebar colapsável com navegação entre seções
- **Persistência local** — dados mantidos via localStorage entre sessões
---


## Imagens
# AuthSection
> <img width="1919" height="972" alt="image" src="https://github.com/user-attachments/assets/a0aff74a-11b7-4c0c-8d53-d4bc12f5b9bd" />
> <img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/aec354a4-27ac-4ccc-ab96-35736cd44252" />

# Kanban
> <img width="1919" height="975" alt="image" src="https://github.com/user-attachments/assets/1f338eff-d4aa-4691-af92-18c8bfbf6552" />
> <img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/58348f8f-66bf-43b9-b303-f5f62b9c705f" />

 
## Stack
 
| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | UI e gerenciamento de estado |
| TypeScript | 5 | Tipagem estática |
| TailwindCSS | 4 | Estilização com design system próprio |
| React Router | 7 | Navegação e rotas protegidas |
| Vite | 8 | Build e ambiente de desenvolvimento |
 
---
 
## Arquitetura
 
O projeto adota uma estrutura **feature-based**, onde cada domínio da aplicação é isolado com seus próprios componentes, tipos e constantes.
 
```
src/
├── features/
│   └── kanban/          # Feature isolada com componentes, tipos e constantes
├── context/             # AuthContext e TaskContext separados por domínio
├── hooks/               # Custom hooks com error guard (useAuth, useTasks)
├── storage/             # Abstraction layer para localStorage
├── validators/          # Funções puras de validação (sem side effects)
├── types/               # Tipos compartilhados entre domínios
├── routes/              # Configuração de rotas e ProtectedRoute
└── pages/               # Páginas thin — apenas composição de componentes
```
 
### Decisões técnicas
 
**Abstraction layer de storage**
Todo acesso ao localStorage passa por `getStorage` e `saveStorage`, funções genéricas com TypeScript. Qualquer troca de mecanismo de persistência no futuro é cirúrgica — um único ponto de mudança.
 
**Validators como funções puras**
`validateLogin` e `validateRegister` recebem dados e retornam resultados sem acessar contexto ou causar side effects. São testáveis de forma isolada e reutilizáveis em qualquer camada.
 
**Custom hooks com error guard**
`useAuth` e `useTasks` lançam erros descritivos se usados fora do provider correspondente, eliminando mensagens genéricas e difíceis de rastrear.
 
**Lazy initialization no useState**
Estados carregados do localStorage usam função de inicialização lazy para evitar leitura e parsing de JSON a cada re-render.
 
**Design system com tokens CSS**
Cores, tipografia e espaçamentos definidos como variáveis CSS no `@theme` do Tailwind, garantindo consistência visual e manutenção centralizada.
 
---
 
## Como rodar localmente
 
```bash
# Clone o repositório
git clone https://github.com/Estangler/studyflow.git
 
# Instale as dependências
npm install
 
# Inicie o servidor de desenvolvimento
npm run dev
```
 
Acesse `http://localhost:5173` no browser.
 
---
 
## Roadmap
 
O projeto está em desenvolvimento ativo. Próximas implementações planejadas:
 
- [ ] Edição de tarefas (título, descrição e prioridade)
- [ ] Loading, error e empty states em todas as listagens
- [ ] Deploy em produção
---
 
## Autor
 
**Estangler Duarte**
