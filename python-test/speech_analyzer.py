"""
Class for analyzing speech in an MP3 file using the Whisper model.
"""

import torch  # pylint: disable=import-error
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline


class SpeechAnalyzer:
    """
    Class for analyzing speech in an MP3 file using the Whisper model.
    """

    def __init__(self, model_id):
        """
        Initializes the SpeechAnalyzer class.

        Args:
            model_id (str): The identifier of the Whisper model.
        """
        self.device = "cuda:0" if torch.cuda.is_available() else "cpu"
        self.torch_dtype = torch.float16 if torch.cuda.is_available() else torch.float32

        self.model = AutoModelForSpeechSeq2Seq.from_pretrained(
            model_id,
            torch_dtype=self.torch_dtype,
            low_cpu_mem_usage=True,
            use_safetensors=True,
        )
        self.model.to(self.device)

        self.processor = AutoProcessor.from_pretrained(model_id)

        self.pipe = pipeline(
            "automatic-speech-recognition",
            model=self.model,
            tokenizer=self.processor.tokenizer,
            feature_extractor=self.processor.feature_extractor,
            max_new_tokens=128,
            chunk_length_s=30,
            batch_size=16,
            return_timestamps=True,
            torch_dtype=self.torch_dtype,
            device=self.device,
        )

    def analyze_mp3(self, mp3_file, output_file):
        """
        Analyzes the speech in the given MP3 file and saves the transcribed text to the output file.

        Args:
            mp3_file (str): The path to the MP3 file.
            output_file (str): The path to the output text file.
        """
        result = self.pipe(mp3_file)
        spoken_text = result["text"]
        print("Recognized text:", spoken_text)

        # Write spoken text to output file
        with open(output_file, "w", encoding="utf-8") as text_file:
            text_file.write(spoken_text)
            print("Spoken words saved to:", output_file)


# Example usage:
if __name__ == "__main__":
    # MODEL_ID = "openai/whisper-large-v3"
    # speech_analyzer = SpeechAnalyzer(MODEL_ID)
    # speech_analyzer.analyze_mp3("sample.mp3", "spoken_words.txt")
    print("Hello")
