package process

import files.FileFinder
import files.FileInfo
import files.FileReader
import java.nio.file.Files
import kotlin.io.path.Path

class ProcessWorker(private val settings: ProcessSettings) {

    private var filesProcessed: Int = 0
    private var filesToProcess: Int = 0
    private var timeStart: Long = 0
    private var timeFinish: Long = 0
    private var fileReader = FileReader(settings.keywords)
    private var finished = false

    private var results = mutableListOf<FileInfo>()

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

            // use to debug
            //Thread.sleep(500)
        }

        finished = true
        timeFinish = System.currentTimeMillis()

        return ProcessInfo(settings, getProgress())
    }

    fun getProgress() : ProcessProgress{
        val percentage = (filesProcessed.toDouble() / filesToProcess.toDouble()) * 100
        val timeSpent = ((if (timeFinish == 0L) System.currentTimeMillis() else timeFinish) - timeStart) / 1000
        return ProcessProgress(percentage.toInt(), filesProcessed, filesToProcess, timeSpent, fileReader.found, finished)
    }

    fun getDetails() : Array<FileInfo>{
        return results.toTypedArray()
    }

    fun getProcessInfo() : ProcessInfo{
        return ProcessInfo(settings, getProgress())
    }
}