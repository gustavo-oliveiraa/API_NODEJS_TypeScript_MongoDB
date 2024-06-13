import exp from "constants";
import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomersService } from '../services/ListCustomersService';

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listCustumerService = new ListCustomersService();

        const customers = await listCustumerService.execute();

        reply.send(customers);
    }
}

export { ListCustomersController }