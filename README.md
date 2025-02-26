# uin-federation

This monorepo contains all projects related to UIN federation, providing a unified codebase for streamlined development and maintenance. By centralizing dependencies and shared resources, it ensures better scalability, consistency, and collaboration across multiple projects.

## Docker Services

### Requirements

- Docker
- Docker Compose
- Node.js
- pnpm

### Keycloak

Keycloak is a widely used open-source identity and access management solution. It provides a centralized platform for managing user identities, roles, and permissions across multiple applications.

To set up the Keycloak service, run the following commands:

```bash
# Start the Keycloak service
pnpm compose:keycloak:up
```

To stop the Keycloak service, run the following command:

```bash
# Stop the Keycloak service
pnpm compose:keycloak:down
```

### ELK

ELK (Elasticsearch, Logstash, and Kibana) is a powerful open-source log management and analysis platform. It allows you to collect, store, and analyze logs from various sources, making it an essential tool for monitoring and troubleshooting.

To set up the ELK service, run the following commands:

```bash
# Start the ELK service
pnpm compose:elk:up
```

To stop the ELK service, run the following command:

```bash
# Stop the ELK service
pnpm compose:elk:down
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
