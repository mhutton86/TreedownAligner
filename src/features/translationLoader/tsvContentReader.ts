import * as fs from "fs";

interface CSVRow {
    id: number;
    // Add other fields based on your CSV structure
}

export const tsvContentReader = async (tsvContentStream: ReadableStreamDefaultReader<Uint8Array>) => {
    // TextDecoder to handle decoding
    const textDecoder = new TextDecoder('utf-8');

    let receivedLength = 0;
    let headerLine: string | undefined = undefined;

    while (true) {
        // @ts-ignore
        const {done, value} = await tsvContentStream.read();

        if (done) {
            break;
        }

        const decodedText = textDecoder.decode(value, {stream: true});
        const lines = decodedText.split(/[\r\n]+/);

        // grab the header line if we haven't
        if (headerLine === null) {
            headerLine = lines.shift();
        }

        lines.forEach((line, index) => {
            console.log(line);
        })

        receivedLength += value?.length;

        // Calculate download progress
        console.log(`Received length: ${receivedLength}`);

//
//     const parsedData: CSVRow[] = [];
//     let currentRow = 1;
//     let currentField = '';
//
//     readable.on('data', (chunk) => {
//         console.log(chunk);
//     });
//
//     readable.on('end', () => {
//         console.log('end');
//     });
//
//     while (true) {
//         const {value, done} = await fileStream.read();
//
//         // stop when we're out of content
//         if (done) {
//             break;
//         }
//
//         console.log(value);
        // const chunk = decoder.decode(value, { stream: true });
        //
        // for (let i = 0; i < chunk.length; i++) {
        //     if (chunk[i] === "\r") {
        //         const id = parseInt(currentField, 10);
        //         // Add other field parsing based on your CSV structure
        //
        //         parsedData.push({ id });
        //
        //         // Stop parsing if the row with the specified ID is found
        //         if (parsedData.length > 0 && parsedData[parsedData.length - 1].id === YOUR_SPECIFIED_ID) {
        //             return parsedData;
        //         }
        //
        //         currentField = '';
        //     } else {
        //         currentField += chunk[i];
        //     }
        // }

        // return parsedData;

        // Allow an async way to load a range of lines

        // Provide an map function to pull out content by specified header
    }
    // console.log('chunks', chunks);
}
