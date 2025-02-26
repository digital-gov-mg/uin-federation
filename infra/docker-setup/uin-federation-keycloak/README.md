# Keycloak with Postgres

## Description

This is a docker compose file to run a keycloak instance with a postgres database.

## Prerequisites

- Docker
- Docker-compose

## Installation

1. Clone the repositorys to your local machines using the following command:

```bash
git clone https://github.com/digital-gov-mg/nui-keycloak.git
cd nui-keycloak
cp .env.example .env
```

2. Navigate to the cloned directory and open the `compose.yml` file.

3. Update the following environment variables in the `compose.yml` file:

- `DB_DATABASE`: The database name
- `DB_USER`: The database user
- `DB_PASSWORD`: The database password
- `KEYCLOAK_USER`: The keycloak user
- `KEYCLOAK_PASSWORD`: The keycloak password

4. Save the changes to the `compose.yml` file.

5. Run the following command to start the containers:

```bash
docker-compose up -d
```

6. Once the containers are running, you can access the keycloak instance by opening the following URL in your web browser:

```bash
http://localhost:8080/auth
```

7. You can access the postgres database by opening the following URL in your web browser:

```bash
http://localhost:5432
```

8. To stop the containers, run the following command:

```bash
docker-compose down
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
