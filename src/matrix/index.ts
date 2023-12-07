import { Cli,Bridge,AppServiceRegistration} from "matrix-appservice-bridge";

new Cli({
    registrationPath: "registration.yaml",
    generateRegistration: function(reg, callback) {
        reg.setId(AppServiceRegistration.generateToken());
        reg.setHomeserverToken(AppServiceRegistration.generateToken());
        reg.setAppServiceToken(AppServiceRegistration.generateToken());
        reg.setSenderLocalpart("slackbot");
        reg.addRegexPattern("users", "@slack_.*", true);
        callback(reg);
    },
    run: function(port, config) {
        // we will do this later
    }
}).run();