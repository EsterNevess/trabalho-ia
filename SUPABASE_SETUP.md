# Configuração do Supabase

## Projeto Criado

- **Nome do Projeto:** admincommerce
- **ID do Projeto:** rdkyugkgrxuoyxepslnl
- **Região:** sa-east-1 (São Paulo)
- **Status:** Ativo e saudável

## Estrutura do Banco de Dados

### Tabela: products

A tabela de produtos foi criada com a seguinte estrutura:

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| id | SERIAL (Primary Key) | ID único do produto |
| title | TEXT | Título do produto |
| price | DECIMAL(10, 2) | Preço do produto |
| description | TEXT | Descrição do produto |
| category | TEXT | Categoria do produto |
| image | TEXT | URL da imagem do produto |
| rating_rate | DECIMAL(3, 2) | Taxa de avaliação (opcional) |
| rating_count | INTEGER | Quantidade de avaliações (padrão: 0) |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data da última atualização |

### Funcionalidades Implementadas

1. **Índice de Categoria:** Criado índice para melhorar buscas por categoria
2. **Trigger de Atualização:** O campo `updated_at` é atualizado automaticamente quando um produto é modificado
3. **Row Level Security (RLS):** Habilitado com políticas que permitem:
   - Leitura pública de produtos
   - Operações completas (INSERT, UPDATE, DELETE) em produtos

## Credenciais

### URL da API
```
https://rdkyugkgrxuoyxepslnl.supabase.co
```

### Chave Anônima (Anon Key)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJka3l1Z2tncnh1b3l4ZXBzbG5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3NTYwOTcsImV4cCI6MjA3OTMzMjA5N30.DM2uWD-RSJederd9II0ii5gXnTGnGTGN6wLsCJdM6h0
```

## Integração no Código

O projeto está configurado para usar o Supabase através do arquivo `services/supabase.ts`. O serviço de API (`services/api.ts`) foi atualizado para interceptar requisições de produtos e usar o Supabase em vez da FakeStoreAPI.

### Arquivos Modificados

1. **services/supabase.ts** - Cliente do Supabase
2. **services/api.ts** - Interceptors para usar Supabase nas operações de produtos
3. **package.json** - Adicionada dependência `@supabase/supabase-js`

## Próximos Passos

Para adicionar mais funcionalidades, você pode:

1. Acessar o dashboard do Supabase: https://supabase.com/dashboard/project/rdkyugkgrxuoyxepslnl
2. Adicionar mais tabelas conforme necessário
3. Configurar autenticação de usuários (se necessário)
4. Ajustar as políticas de RLS conforme sua necessidade de segurança

## Verificar Status

Para verificar o status do projeto e ver logs, você pode usar:
- Dashboard do Supabase
- Ferramentas MCP do Supabase integradas no Cursor

