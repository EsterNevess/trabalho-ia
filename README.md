<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# AdminCommerce - Dashboard Administrativo

Sistema administrativo para gerenciamento de produtos com foco em acessibilidade, suporte a Libras e design responsivo.

## Características

### ♿ Acessibilidade
- **Suporte a Libras (VLibras)**: Integração com a biblioteca oficial do governo brasileiro para tradução em Libras
- **Navegação por teclado**: Todos os elementos são acessíveis via teclado
- **ARIA labels**: Atributos semânticos para leitores de tela
- **Skip links**: Link para pular para o conteúdo principal
- **Alto contraste**: Cores otimizadas para melhor legibilidade
- **Foco visível**: Indicadores claros de foco para navegação

### 📱 Responsividade
- Design totalmente responsivo para mobile, tablet e desktop
- Layout adaptativo que se ajusta a diferentes tamanhos de tela
- Menu mobile otimizado
- Tabelas responsivas com scroll horizontal quando necessário

### 🌐 Internacionalização
- Interface em português brasileiro
- Suporte completo a Libras via VLibras

## Configuração do Banco de Dados

Este projeto utiliza o Supabase como banco de dados. O banco de dados já foi criado e configurado automaticamente.

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
VITE_SUPABASE_URL=https://rdkyugkgrxuoyxepslnl.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJka3l1Z2tncnh1b3l4ZXBzbG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NTYwOTcsImV4cCI6MjA3OTMzMjA5N30.DM2uWD-RSJederd9II0ii5gXnTGnGTGN6wLsCJdM6h0
```

**Nota:** As credenciais também estão hardcoded no arquivo `services/supabase.ts` como fallback, mas é recomendado usar variáveis de ambiente em produção.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Crie o arquivo `.env` com as variáveis de ambiente (veja seção acima)

3. Run the app:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Tecnologias Utilizadas

- React 18
- TypeScript
- React Router
- Tailwind CSS
- Supabase (Banco de dados)
- VLibras (Acessibilidade em Libras)
- Lucide React (Ícones)
- Recharts (Gráficos)

## Acessibilidade

Este projeto segue as diretrizes WCAG 2.1 nível AA e inclui:
- Navegação por teclado completa
- Suporte a leitores de tela
- Tradução em Libras
- Contraste adequado de cores
- Foco visível em todos os elementos interativos

## Superbase

https://supabase.com/dashboard/project/rdkyugkgrxuoyxepslnl
