package com.example.plugins

import files.FileFinder
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*
import kotlinx.coroutines.*
import process.ProcessInfo
import process.ProcessWorker
import process.ProcessSettings
import java.util.concurrent.ExecutorService

fun Application.configureRouting() {
    val workers = mutableMapOf<Long, ProcessWorker>()
    val DbOfActive = mutableMapOf<Long, ProcessSettings>()
    val Db = mutableMapOf<Long, ProcessInfo>()

    routing {
        get("/api") {
            call.respondText("Hello World!")
        }
        get("/api/ProcessDirectoryTest"){
            val keys = listOf("Cthulhu", "truth", "death", "mad")
            val path = "C:\\Users\\Atolanin\\Desktop\\TestFileAnalyzer"
            val settings = ProcessSettings(path, null, null, keys, 1)

            val worker = ProcessWorker(settings)
            //Db.add(worker.startNewProcess())
        }
        post<ProcessSettings>("/api/start-process") { settings ->
            val worker = ProcessWorker(settings)

            val validationResult = worker.validateSettings()
            if (validationResult.isNotEmpty())
                call.respond(HttpStatusCode.BadRequest, validationResult)

            withContext(Dispatchers.IO) {
                launch {
                    workers[settings.id] = worker
                    worker.startNewProcess()
                }
            }

            call.respond(HttpStatusCode.OK)

            DbOfActive.put(settings.id, settings)
        }
        get("/api/fetch-list"){
            call.respond(Db.values.toTypedArray())
        }
        get("/api/fetch-active-list"){
            call.respond(DbOfActive.values.toTypedArray())
        }
        get("/api/fetch-progress"){
            val id = call.request.queryParameters["id"]!!.toLong()
            val worker = workers.getValue(id)

            val progress = worker.getProgress()
            call.respond(progress)

            if (progress.finished)
                DbOfActive.remove(id)
                Db.put(id, worker.getProcessInfo())
        }
        get("api/get-process-details"){
            val id = call.request.queryParameters["id"]!!.toLong()
            val worker = workers.getValue(id)

            call.respond(worker.getDetails())
        }
        post<Long>("/api/delete-process"){ id ->
            workers.remove(id)
            Db.remove(id)

            call.respond(HttpStatusCode.OK)
        }
    }
}
