export const defineProjectStatus = (status: "beta" | "dev" | "prod" | "fin/archive" ) => {
    switch (status) {
        case "beta":
            return "bg-chart-1";
        case "dev":
            return "bg-chart-2";
        case "prod":
            return "bg-chart-3";
        case "fin/archive":
            return "bg-chart-4";
        default:
            return "bg-card";
    }
}