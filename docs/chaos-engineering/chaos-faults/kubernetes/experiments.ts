import { ExperimentDetails } from "@site/src/components/ChaosEngineering/ExperimentListSection";

export const experiments: ExperimentDetails[] = [
{
    name: "Kubelet service kill",
    description:"Kubelet service kill makes the application unreachable on the account of the node turning unschedulable (NotReady).",
    tags: ["node"],
    category: "kubernetes",
  },
{
    name: "Node CPU hog",
    description:"Node CPU hog exhausts the CPU resources on a Kubernetes node.",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Node drain",
    description:"Node drain drains the node of all its resources running on it.",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Node IO stress",
    description:"Node IO stress causes I/O stress on the Kubernetes node. ",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Node memory hog",
    description:"Node memory hog causes memory resource exhaustion on the Kubernetes node. ",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Node network latency",
    description: "Node network latency introduces network latency to the Kubernetes node.",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Node network loss",
    description: "Node network loss introduces packet loss in the Kubernetes node.",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Node restart",
    description:"Node restart disrupts the state of the node by restarting it.",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Node taint",
    description:"Node taint taints (contaminates) the node by applying the desired effect. ",
    tags: ["node"],
    category: "kubernetes",
  },
  {
    name: "Container kill",
    description:"Container kill causes container failure on specific (or random) replicas of an application resource.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Disk fill",
    description:"Disk fill applies disk stress by filling the pod's ephemeral storage on a node.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod API block",
    description:"Pod API block blocks the API requests for ingress and egress traffic through path filtering",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod API latency",
    description:"Pod API latency injects API request and response latency by starting proxy server and redirecting the traffic through it",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod API modify body",
    description:"Pod API modify body modifies the API request and response body by replacing any portions that match a specified regular expression with a provided value",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod API modify header",
    description:"Pod API modify header overrides the header values of API requests and responses with the user-provided values for the given keys",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod API status code",
    description:"Pod API status code change the API response status code and optionally API response body through path filtering",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod autoscaler",
    description:"Pod autoscaler determines whether nodes can accommodate multiple replicas of a given application pod.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod CPU hog exec",
    description:"Pod CPU hog exec consumes excess CPU resources of the application container.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod CPU hog",
    description:"Pod CPU hog exec consumes excess CPU resources of the application container.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod delete",
    description:"Pod delete causes specific (or random) replicas of an application resource to fail forcibly (or gracefully).",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod DNS error",
    description:"Pod DNS error injects chaos to disrupt DNS resolution in pods.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod DNS spoof",
    description:"Pod DNS spoof injects chaos into pods to mimic DNS resolution.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod HTTP latency",
    description:"Pod HTTP latency injects HTTP response latency by starting proxy server and redirecting the traffic through it.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod HTTP modify body",
    description:"Pod HTTP modify body injects chaos on the service whose port is provided using the `TARGET_SERVICE_PORT` environment variable. ",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod HTTP modify header",
    description:"Pod HTTP modify header injects chaos on the service whose port is provided using the `TARGET_SERVICE_PORT` environment variable.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod HTTP reset peer",
    description:"Pod HTTP reset peer stops the outgoing HTTP requests by resetting the TCP connection by starting the proxy server and redirecting the traffic through the proxy server.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod HTTP status code",
    description:"Pod HTTP status code injects chaos inside the pod by modifying the status code of the response from the application server to the desired status code provided by the user.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod IO attribute override",
    description:"Pod IO attribute override modifies the properties of files located within the mounted volume of the pod",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod IO error",
    description:"Pod IO error returns an error on the system calls of files located within the mounted volume of the pod",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod IO latency",
    description:"Pod IO latency delays the system calls of files located within the mounted volume of the pod",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod IO mistake",
    description:"Pod IO mistake causes the file to read or write an incorrect value within the mounted volume of the pod",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod IO stress",
    description:"Pod I/O stress causes IO stress on the application pod by spiking the number of input and output requests.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod memory hog exec",
    description:"Pod memory hog exec consumes memory resources on the application container in megabytes.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod memory hog",
    description:"Pod memory hog consumes memory resources in excess, resulting in a significant spike in the memory usage of a pod.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod network corruption",
    description:"Pod network corruption injects corrupted packets of data into the specified container by starting a traffic control (tc) process with netem rules to add egress packet corruption.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod network duplication",
    description:"Pod network duplication injects chaos to disrupt the network connectivity to Kubernetes pods.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod network latency",
    description:"Pod network latency introduces latency (delay) to a specific container by initiating a traffic control (tc) process with netem rules to add egress delays.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod network loss",
    description:"Pod network loss causes packet loss in a specific container by starting a traffic control (tc) process with netem rules to add egress (or ingress) loss.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod network partition",
    description:"Pod network partition blocks 100% ingress and egress traffic of the target application by creating network policy.",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Pod network rate limit",
    description:"Pod network rate limit fault generates Traffic Control (tc) rules with Token Bucket Filter (TBF) to assess Kubernetes pod resilience under limited network bandwidth condition",
    tags: ["pod"],
    category: "kubernetes",
  },
  {
    name: "Time chaos",
    description:"Time chaos introduces controlled time offsets to disrupt the system time of the target pod",
    tags: ["pod"],
    category: "kubernetes",
  },
];
