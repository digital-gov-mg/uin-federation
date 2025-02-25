# ELK (Elasticsearch, Logstash, Kibana) Stack

## Description

This is a docker-compose file to run the ELK stack (Elasticsearch, Logstash, Kibana) on a single machine.

## Requirements

- docker
- docker-compose
- docker-machine (optional)

## Usage

### 1. Clone this repository

```
git clone https://github.com/digital-gov-mg/uin-federation.git
```

### 2. Start the ELK stack

```
cd infra/docker-setup/elk
cp .env.example .env
docker-compose up -d
```

### 3. Access the ELK stack

#### Elasticsearch

Elasticsearch is available at `http://localhost:9200` if you're running the stack on your local machine, or `http://host-ip:9200` if you're running the stack on a remote machine.

#### Logstash

Logstash is available at `http://localhost:9600` if you're running the stack on your local machine, or `http://host-ip:9600` if you're running the stack on a remote machine.

#### Kibana

Kibana is available at `http://localhost:5601` if you're running the stack on your local machine, or `http://host-ip:5601` if you're running the stack on a remote machine.

### 4. Stop the ELK stack

```
docker-compose down
```

## Customization

You can customize the ELK stack by editing the `.env` file. For example, you can change the password for the 'elastic' user, or change the version of Elasticsearch, Logstash, and Kibana.

To rebuild the ELK stack with your changes, run `docker-compose build` and then `docker-compose up -d`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
