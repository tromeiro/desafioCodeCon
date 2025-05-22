# desafioCodeCon
JSON de entrada
```{
  "id": "uuid",
  "name": "string",
  "age": "int",
  "score": "int",
  "active": "bool",
  "country": "string",
  "team": {
    "name": "string",
    "leader": "bool",
    "projects": [{ "name": "string", "completed": "bool" }]
  },
  "logs": [{ "date": "YYYY-MM-DD", "action": "login/logout" }]
}```


POST /users
Recebe e armazena os usuários na memória. Pode simular um banco de dados em memória.

GET /superusers
Filtro: score >= 900 e active = true
Retorna os dados.
GET /top-countries
Agrupa os superusuários por país.
Retorna os 5 países com maior número de superusuários.
GET /team-insights
Agrupa por team.name.
Retorna: total de membros, líderes, projetos concluídos e % de membros ativos.
GET /active-users-per-day
Conta quantos logins aconteceram por data.
