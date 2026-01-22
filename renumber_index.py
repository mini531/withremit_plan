
import re

def renumber(match):
    val = match.group(1)
    if val == "7-1":
        return '<td class="center">8</td>'
    
    try:
        num = int(val)
        if num >= 8:
            return f'<td class="center">{num + 1}</td>'
    except ValueError:
        pass
        
    return match.group(0)

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find td with center class containing 7-1 or digits only
# We use a specific pattern to avoid matching other columns like 'O'
pattern = r'<td class="center">\s*(7-1|\d+)\s*</td>'

new_content = re.sub(pattern, renumber, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Renumbering complete.")
