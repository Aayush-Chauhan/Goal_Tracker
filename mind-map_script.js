// Mind map data structure
let mindMapData = {
    "meta": {
      "name": "mindmap",
      "author": "you",
      "version": "0.1"
    },
    "format": "node_tree",
    "data": {
      "id": "root",
      "topic": "Writing Goals",
      "children": []
    }
  };

  let jm;

  // Open mind map creator
  document.getElementById("openMindMap").addEventListener("click", function () {
    document.getElementById("mindMapContainer").style.display = "block";

    // Initialize jsMind only once when the container is shown
    if (!jm) {
      jm = new jsMind({
        container: 'mindMapCanvas',
        theme: 'primary',
      });
      jm.show(mindMapData);  // Display the initial mind map
    }
  });

  // Add Node
  document.getElementById("addNodeButton").addEventListener("click", function () {
    const newNode = {
      "id": "node" + (mindMapData.data.children.length + 1),
      "topic": "New Node " + (mindMapData.data.children.length + 1),
      "children": []
    };

    // Add new node to the root node's children
    mindMapData.data.children.push(newNode);

    // Re-render the mind map
    jm.show(mindMapData);
  });

  // Delete Node (Basic Example: Deletes the first child node)
  document.getElementById("deleteNodeButton").addEventListener("click", function () {
    if (mindMapData.data.children.length > 0) {
      mindMapData.data.children.shift();  // Remove the first node
      jm.show(mindMapData);  // Re-render the mind map
    } else {
      alert("No nodes to delete.");
    }
  });

  // Add Label to a Node (You can add more sophisticated label functionality)
  document.getElementById("addLabelButton").addEventListener("click", function () {
    if (mindMapData.data.children.length > 0) {
      let node = mindMapData.data.children[0]; // For now, add label to the first node
      node.topic += " (Label Added)";
      jm.show(mindMapData);  // Re-render the mind map
    } else {
      alert("No nodes to label.");
    }
  });