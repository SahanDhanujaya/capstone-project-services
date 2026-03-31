module.exports = {
  apps : [
    {
      name: "user-service",
      script: "./user-service/target/user-service-0.0.1-SNAPSHOT.jar",
      args: "",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/user-service.log",
      instances: 2
    }, {
      name: "tool-inventory-service",
      script: "./tool-inventory-service/target/tool-inventory-service-0.0.1-SNAPSHOT.jar",
      args: "",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/tool-inventory-service",
      instances: 2
    }, {
      name: "borrow-service",
      script: "./borrow-service/target/borrow-service-0.0.1-SNAPSHOT.jar",
      args: "",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/borrow-service",
      instances: 2
    },
  ]
}
