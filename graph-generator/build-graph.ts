import { readLogs } from './reader';
import { generateGraph } from './generate-graph';
(async () => {
    const logFileName = process.env['LOG_TEXT']!;
    const requests = await readLogs(logFileName);
    console.log(`Found ${requests.length} requests.`);
    const graphFileName = await generateGraph(requests);
    console.log(`Exported log graph to ${graphFileName}`);
})();
