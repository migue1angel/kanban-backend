import { Body, Post } from "@nestjs/common";
import { FeedbacksService } from "../services/feedbacks.service";
import { create } from "domain";
import { CreateFeedbackDto } from "../dto/feedback/create-feedback.dto";

export class FeedbacksController {
    constructor(
        private readonly feedbacksService: FeedbacksService
    ) {}

    @Post()
    async create(@Body() createFeedbackDto: CreateFeedbackDto) {
        return this.feedbacksService.create(createFeedbackDto);

    }
}