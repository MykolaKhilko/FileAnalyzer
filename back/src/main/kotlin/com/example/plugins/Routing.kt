package com.example.plugins

import files.FileFinder
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*

data class ProcessSettings(val Path: String,
                           val Names: String,
                           val Extensions: String,
                           val Keywords: String,
                           val Id: Long)

fun Application.configureRouting() {

    routing {
        get("/api") {
            call.respondText("Hello World!")
        }
        get("/api/ProcessDirectoryTest"){
            val keys = listOf("Cthulhu", "truth", "death", "mad")
            FileFinder().processDirectory("C:\\Users\\Atolanin\\Desktop\\TestFileAnalyzer", keys)


        }
        post<ProcessSettings>("/api/start-process") { body ->
            FileFinder().processDirectory(body.Path, body.Keywords.chunked(10))
        }
    }
}
