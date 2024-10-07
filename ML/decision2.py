import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix
from sklearn.preprocessing import LabelEncoder

# Load the Titanic dataset from a CSV file
data = pd.read_csv(r'C:\Users\mlkar\Downloads\train.csv')  # Raw string to avoid escape issues

# Fill missing values
data['Age'].fillna(data['Age'].median(), inplace=True)  # Fill missing 'Age' with median
data['Embarked'].fillna(data['Embarked'].mode()[0], inplace=True)  # Fill missing 'Embarked' with mode

# Convert categorical variables to numeric
data['Sex'] = LabelEncoder().fit_transform(data['Sex'])  # Convert 'Sex' column to 0 (female) and 1 (male)
data = pd.get_dummies(data, columns=['Embarked'], drop_first=True)  # One-hot encode 'Embarked' column

# Select the features and target variable
features = ['Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare', 'Embarked_Q', 'Embarked_S']
X = data[features]  # Features (input)
y = data['Survived']  # Target variable (output)

# Split the dataset into training (80%) and testing (20%) sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)

# Train the model on the training data
model.fit(X_train, y_train)

# Make predictions on the test data
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)  # Calculate accuracy
conf_matrix = confusion_matrix(y_test, y_pred)  # Generate confusion matrix

# Output the results
print(f'Accuracy: {accuracy * 100:.2f}%')
print('Confusion Matrix:')
print(conf_matrix)
