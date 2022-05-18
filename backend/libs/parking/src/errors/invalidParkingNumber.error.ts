import { ApolloError } from "apollo-server-errors";

export class ParkingNotFound extends ApolloError {
    constructor(message: string) {
        super(message, "INVALID_PARKING_NUMBER");

        Object.defineProperty(this, "invalid_parking_number", { value: "MyError" });
    }
}
