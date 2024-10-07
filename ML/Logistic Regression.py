import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report

# Load the MNIST dataset
mnist = fetch_openml('mnist_784')
X = mnist['data']
y = mnist['target'].astype(np.int8)  # Convert labels to int8

# Normalize the pixel values
X = X / 255.0  # Scale pixel values to the range [0, 1]

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the Logistic Regression model
log_reg = LogisticRegression(max_iter=1000, solver='lbfgs')  # Removed multi_class parameter
log_reg.fit(X_train, y_train)

# Make predictions on the test set
y_pred = log_reg.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy * 100:.2f}%')
conf_matrix = confusion_matrix(y_test, y_pred)
print("Confusion Matrix:")
print(conf_matrix)
class_report = classification_report(y_test, y_pred)
print("Classification Report:")
print(class_report)

# Visualize a few test images with their predicted labels
n_images = 5
indices = np.random.choice(len(X_test), n_images)  # Randomly select indices for visualization

for i in indices:
    plt.imshow(X_test.iloc[i].values.reshape(28, 28), cmap='gray')  # Reshape to 28x28 pixels
    plt.title(f'Predicted: {y_pred[i]}')  # Display the predicted label
    plt.axis('off')  # Hide axes
    plt.show()
