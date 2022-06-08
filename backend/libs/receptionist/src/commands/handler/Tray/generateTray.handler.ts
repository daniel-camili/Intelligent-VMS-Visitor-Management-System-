import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { generateTrayCommand } from "../../impl/Tray/generateTray.command";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Tray, TrayDocument } from "../../../schema/tray.schema";

@CommandHandler(generateTrayCommand)
export class CreateUserCommandHandler implements ICommandHandler {
    constructor(
        @InjectModel(Tray.name) private trayModel: Model<TrayDocument>,
    ) {}

    async execute(command: generateTrayCommand) {
        const { trayID, inviteID, containsResidentID,containsVisitorID } = command;
        await this.trayModel.create({ trayID: trayID, inviteID: inviteID, containsResidentID: containsResidentID, containsVisitorID: containsVisitorID});
    }
}