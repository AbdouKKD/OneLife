import React, { useEffect, useState } from 'react';

const ItemsList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/items');
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return <p>Loading items...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Item List</h1>
            {items.length === 0 ? (
                <p>No items found.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item._id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemsList;
