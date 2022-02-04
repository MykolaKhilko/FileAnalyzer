package process

import files.FileFinder
import files.FileInfo
import files.FileReader
import java.nio.file.Files
import kotlin.io.path.Path

class ProcessWorker(private val settings: ProcessSettings) {

    private var filesProcessed: Int = 0
    var filesToProcess: Int = 0
    var timeStart: Long = 0
    var fileReader = FileReader(settings.keywords)
    var finished = false

    var results = mutableListOf<FileInfo>()

    fun validateSettings(): String{
        return if (Files.exists(Path(settings.path)))
            ""
        else
            "No files in directory"
    }

    fun startNewProcess() : ProcessInfo{
        val files = FileFinder().processDirectory(settings.path, settings.names, settings.extensions)

        timeStart = System.currentTimeMillis()
        filesToProcess = files.size

        files.forEachIndexed{index, file ->
            results.add(fileReader.processFile(file))
            filesProcessed++
            Thread.sleep(6000)
        }

        finished = true

        return ProcessInfo(settings, getProgress())
    }

    fun getProgress() : ProcessProgress{
        val percentage = (filesProcessed.toDouble() / filesToProcess.toDouble()) * 100
        val timeSpent = (System.currentTimeMillis() - timeStart) / 1000
        return ProcessProgress(percentage.toInt(), filesProcessed, filesToProcess, timeSpent, fileReader.found, finished)
    }

    fun getDetails() : Array<FileInfo>{
        return results.toTypedArray()
    }
}