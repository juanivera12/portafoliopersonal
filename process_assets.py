from rembg import remove
from PIL import Image
import os

if __name__ == "__main__":
    image_path = r"src/assets/yo.jpg"
    output_image_path = r"src/assets/yo-nobg.png"

    print("Starting processing...")
    
    if os.path.exists(image_path):
        try:
            input_image = Image.open(image_path)
            output_image = remove(input_image)
            # Ensure output dir exists
            os.makedirs(os.path.dirname(output_image_path), exist_ok=True)
            output_image.save(output_image_path)
            print(f"Background removed. Saved to {output_image_path}")
        except Exception as e:
            print(f"Error removing background: {e}")
    else:
        print(f"Image not found at {image_path}. Checking current directory...")
        # Check current dir as fallback
        if os.path.exists("yo.jpg"):
             try:
                input_image = Image.open("yo.jpg")
                output_image = remove(input_image)
                os.makedirs(os.path.dirname(output_image_path), exist_ok=True)
                output_image.save(output_image_path)
                print(f"Background removed from local yo.jpg. Saved to {output_image_path}")
             except Exception as e:
                print(f"Error removing background: {e}")
        else:
            print("yo.jpg not found.")
    
    print("Processing complete.")
