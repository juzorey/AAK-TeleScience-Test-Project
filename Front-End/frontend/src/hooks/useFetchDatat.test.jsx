import { renderHook } from '@testing-library/react-hooks';
import useFetchData from '../useFetchData';

describe('useFetchData', () => {
  it('should fetch data successfully', async () => {
    const mockData = { id: 1, name: 'John Doe' };
    const fetchMock = jest.fn().mockResolvedValueOnce(mockData);
    global.fetch = fetchMock;

    const { result, waitForNextUpdate } = renderHook(() => useFetchData());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data');
  });

  it('should handle fetch error', async () => {
    const errorMessage = 'Failed to fetch data';
    const fetchMock = jest.fn().mockRejectedValueOnce(new Error(errorMessage));
    global.fetch = fetchMock;

    const { result, waitForNextUpdate } = renderHook(() => useFetchData());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(errorMessage);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data');
  });
});