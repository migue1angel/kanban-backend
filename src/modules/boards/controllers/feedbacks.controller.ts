import { Body, Controller, Post } from "@nestjs/common";
import { FeedbacksService } from "../services/feedbacks.service";
import { CreateFeedbackDto } from "../dto/feedback/create-feedback.dto";

@Controller('feedbacks')
export class FeedbacksController {
    constructor(
        private readonly feedbacksService: FeedbacksService
    ) {}

    @Post()
    async create(@Body() createFeedbackDto: CreateFeedbackDto) {
        return "Create feedback";

    }
}