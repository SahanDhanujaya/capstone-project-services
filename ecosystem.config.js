module.exports = {
  apps: [
    {
      name: "cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy",
      args: "--private-ip --port=3306 tool-library-management:asia-southeast1:mysql-vm",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      log_file: "./log/cloud-sql-proxy.log"
    },

    {
      name: "user-service",
      script: "java",
      args: "-jar ./user-service/target/user-service-0.0.1-SNAPSHOT.jar",
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      log_file: "./log/user-service.log"
    },

    {
      name: "tool-inventory-service",
      script: "java",
      args: "-jar ./tool-inventory-service/target/tool-inventory-service-0.0.1-SNAPSHOT.jar",
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      log_file: "./log/tool-inventory-service.log"
    },

    {
      name: "borrow-service",
      script: "java",
      args: "-jar ./borrow-service/target/borrow-service-0.0.1-SNAPSHOT.jar",
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      log_file: "./log/borrow-service.log"
    }
  ]
};