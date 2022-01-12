package com.example.plugins

import files.FileFinder
import io.ktor.routing.*
import io.ktor.http.*
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.request.*

fun Application.configureRouting() {

    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        get("/ProcessDirectoryTest"){
            val keys = listOf("Cthulhu", "truth", "death", "mad")
            FileFinder().processDirectory("C:\\Users\\Atolanin\\Desktop\\TestFileAnalyzer", keys)
        }
    }
}
