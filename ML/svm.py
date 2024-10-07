# Import necessary libraries
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_openml
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report

# Load the MNIST dataset
mnist = fetch_openml('mnist_784', version=1)

# Split dataset into features and labels
X, y = mnist["data"], mnist["target"]

# Convert the labels to integers
y = y.astype(np.uint8)

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the features using StandardScaler (important for SVM and Logistic Regression)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train.astype(np.float64))
X_test_scaled = scaler.transform(X_test.astype(np.float64))

# 1. Logistic Regression Model
log_reg = LogisticRegression(max_iter=1000, solver='lbfgs', multi_class='multinomial')
log_reg.fit(X_train_scaled, y_train)

# Make predictions
y_pred_log_reg = log_reg.predict(X_test_scaled)

# Calculate accuracy for Logistic Regression
accuracy_log_reg = accuracy_score(y_test, y_pred_log_reg)
print(f"Logistic Regression Accuracy: {accuracy_log_reg * 100:.2f}%")
print("\nLogistic Regression Classification Report:\n", classification_report(y_test, y_pred_log_reg))

# 2. Support Vector Machine (SVM) Model
svm_clf = SVC(kernel='linear')  # You can experiment with different kernels such as 'rbf'
svm_clf.fit(X_train_scaled, y_train)

# Make predictions
y_pred_svm = svm_clf.predict(X_test_scaled)

# Calculate accuracy for SVM
accuracy_svm = accuracy_score(y_test, y_pred_svm)
print(f"\nSVM Accuracy: {accuracy_svm * 100:.2f}%")
print("\nSVM Classification Report:\n", classification_report(y_test, y_pred_svm))

# Comparing both models
print(f"\nComparison of Logistic Regression vs SVM:\n")
print(f"Logistic Regression Accuracy: {accuracy_log_reg * 100:.2f}%")
print(f"SVM Accuracy: {accuracy_svm * 100:.2f}%")
