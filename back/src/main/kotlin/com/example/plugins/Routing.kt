package com.example.plugins

import files.FileFinder
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import process.ProcessWorker
import process.ProcessSettings

fun Application.configureRouting() {
    val workers = mutableMapOf<Long, ProcessWorker>()

    routing {
        get("/api") {
            call.respondText("Hello World!")
        }
        get("/api/ProcessDirectoryTest"){
            val keys = listOf("Cthulhu", "truth", "death", "mad")
            val path = "C:\\Users\\Atolanin\\Desktop\\TestFileAnalyzer"
            val settings = ProcessSettings(path, null, null, keys, 1)

            val worker = ProcessWorker(settings)
            worker.startNewProcess()
        }
        post<ProcessSettings>("/api/start-process") { settings ->
            val worker = ProcessWorker(settings)

            val validationResult = worker.validateSettings()
            if (validationResult.isEmpty())
                call.respond(HttpStatusCode.OK)
            else
                call.respond(HttpStatusCode.BadRequest, validationResult)

            workers[settings.id] = worker

            worker.startNewProcess()
        }
        get("/api/fetch-progress"){
            val id = call.request.queryParameters["id"]!!.toLong()
            val worker = workers.getValue(id)

            call.respond(worker.getProgress())
        }
    }
}
