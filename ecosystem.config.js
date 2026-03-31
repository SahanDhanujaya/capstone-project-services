module.exports = {
  apps : [
    {
      name: "cloud-sql-auth-proxy",
      // Ensure the path to the binary is correct (e.g., ./cloud-sql-proxy)
      script: "./cloud-sql-proxy",
      args: "tool-library-management:asia-southeast1:mysql-vm --private-ip",
      instances: 1,
      log_file: "./log/cloud-sql-proxy.log",
    },
    {
      name: "user-service",
      script: "./user-service/target/user-service-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/user-service.log",
      instances: 2
    },
    {
      name: "tool-inventory-service",
      script: "./tool-inventory-service/target/tool-inventory-service-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/tool-inventory-service.log",
      instances: 2
    },
    {
      name: "borrow-service",
      script: "./borrow-service/target/borrow-service-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/borrow-service.log",
      instances: 2
    },
  ]
}